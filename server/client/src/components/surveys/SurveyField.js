// SurveyField conatains logic to render a single
// label and text input
// surveyNew shows SurveyForm and SurveyFormReview
import React from 'react';

export default ({ input, label }) =>{
    return (
        <div>
            <label>{label}</label>
            <input {...input} />  
        </div>
    );
}