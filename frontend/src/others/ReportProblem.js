import React from 'react';
import './ReportProblem.css';

const ReportProblem = () => {
    return (
        <div className="reportProblem_page">
            <h1>Report a Problem</h1>
            <p>Please describe the problem you are facing:</p>
            <form className="reportProblem_form">
                <div className="formGroup">
                    <label>Problem Details:</label>
                    <textarea placeholder="Describe the problem" required></textarea>
                </div>
                <button type="submit" className="submitButton">Submit Report</button>
            </form>
        </div>
    );
};

export default ReportProblem;
