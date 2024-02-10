from flask import Flask, request, jsonify
import json
import xgboost as xgb
import pandas as pd
from dateutil.relativedelta import relativedelta
from datetime import datetime, timedelta

# Create a Flask application instance
app = Flask(__name__)


reg_new = xgb.XGBRegressor()
reg_new.load_model('model.json')
FEATURES = ['dayofyear', 'hour', 'dayofweek', 'quarter', 'month','year','lag1','lag2','lag3']
future_w_features = pd.read_csv("./future_w_features.csv")
future_w_features['pred'] = reg_new.predict(future_w_features[FEATURES])
# future_w_features.set_index(future_w_features.columns[0], inplace=True)
future_w_features['day_from_start'] = future_w_features.index + 1


# Define a route for the home page
@app.route('/')
def home():
    return 'Hello, World!'

@app.route('/average-weather', methods=['GET'])
def average_weather():
    request_body = request.data.decode('utf-8')
    dict_body = json.loads(request_body)
    month = dict_body["month"]
    start_date = datetime.now()
    end_date = start_date + relativedelta(months=month)
    difference = end_date - start_date
    start_date_difference = (start_date - datetime.strptime('2020-12-11', '%Y-%m-%d')).days
    difference_in_days = difference.days
    filtered_df = future_w_features[(future_w_features["day_from_start"] >= start_date_difference ) & (future_w_features["day_from_start"] <= start_date_difference + difference_in_days)]
    daily_sum = filtered_df["pred"].sum() / (month * 30)
    return jsonify({'average_weather': difference_in_days, "star days": start_date_difference, "sum avg": round(daily_sum)})

# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)
