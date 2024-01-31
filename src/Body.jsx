import React from 'react';

function Body() {
    return (
        <>
            <main>
                <p>Welcome to my React App!</p>
                <p>This is for deployment testing only!</p>

                <p>**When deploying web applications, it is easiest when the project does NOT live within another repository**</p>
                <p>**Each project to be deployed should live outside the VSchool Repository in a seperate single Repository**</p>

                <div id="ul-div">
                    <ul>
                        <h1>Render</h1>
                        <li>New Static Site</li>
                        <li>Connect to Repo</li>
                        <li>Build Command: $npm run build</li>
                        <li>Publish Directory: dist</li>
                        <li>Deploy</li>
                    </ul>
                    <ul>
                        <h1>Netlify</h1>
                        <li>Create a New Site</li>
                        <li>Connect to Repo</li>
                        <li>Deploy</li>
                    </ul>
                </div>
            </main>
        </>
    );
}

export default Body;