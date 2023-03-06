
import React from 'react';
import Resume from "../../asset/resume.pdf";

function downloadResume() {

return (
    <div>
    <a href={Resume} download="ting-wong-resume.pdf" type="button" class="btn btn-secondary">Download Resume</a>
    </div>
)
}

export default downloadResume