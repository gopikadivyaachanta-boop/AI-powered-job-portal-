from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Sample data for demonstration
jobs = [
    {"id": 1, "title": "Software Engineer", "company": "Tech Corp", "location": "Remote"},
    {"id": 2, "title": "Data Scientist", "company": "Data Inc", "location": "New York"},
]

@app.route('/api/jobs', methods=['GET'])
def get_jobs():
    return jsonify(jobs)

@app.route('/api/jobs/<int:job_id>', methods=['GET'])
def get_job(job_id):
    job = next((job for job in jobs if job['id'] == job_id), None)
    if job:
        return jsonify(job)
    return jsonify({"error": "Job not found"}), 404

@app.route('/api/auth/login', methods=['POST'])
def login():
    data = request.get_json()
    # Dummy authentication logic
    if data.get('username') == 'admin' and data.get('password') == 'password':
        return jsonify({"message": "Login successful", "token": "dummy_token"})
    return jsonify({"error": "Invalid credentials"}), 401

if __name__ == '__main__':
    app.run(debug=True)
