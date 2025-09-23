export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><h3>Assignment Name</h3></label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description" defaultValue="The assignment is available online Submit a link to the landing page of
        your Web application running on Vercel. The  landing pasge should include
        the following: Your full name and section Links to each of the lab
        assignments Links to the Kambaz application
        Links to all relevant source code repositories
        The Kambaz application should include a link to navigate back
        to the landing page.">
      </textarea>
      <br />
      <table>
        <thead>
            <tr>
            <th><br /></th>
            </tr>
        </thead>
        <tbody>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} type="number"/>
            <br /> <br />
          </td>
        </tr>
        <tr>
            <td align="right" valign="top">
            <label  htmlFor="wd-group"> Assignment Group </label>
            </td>
            <td>
            <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS ">ASSIGNMENTS </option>
                <option value="ASSIGNMENTS1 ">ASSIGNMENTS 1 </option>
                <option value="ASSIGNMENTS2 "> ASSIGNMENTS 2 </option>
                <option value="ASSIGNMENTS3 ">ASSIGNMENTS 3 </option>
            </select>
            <br /> <br />
            </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label  htmlFor="wd-display-grade-as"> Display Grade as </label>
            </td>
            <td>
            <select id="wd-display-grade-as" defaultValue="PERCENTAGE">
                <option value="ROMAN">Roman</option>
                <option value="NUMERIC">Numeric</option>
                <option value="PERCENTAGE">Percentage</option>
                <option value="ALPHANUMERIC">Alpha Numeric</option>
            </select>
            <br /> <br />
            </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label  htmlFor="wd-submission-type"> Submission Type </label>
            </td>
            <td>
            <select id="wd-submission-type" defaultValue="ONLINE">
                <option value="OFFLINE">Offline</option>
                <option value="ONLINE">Online</option>
            </select>
            <br /> <br />
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
                <label>Online Entry Options</label><br/>
                <input type="checkbox" name="check-genre" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br/>
                <input type="checkbox" name="check-genre" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Website URL</label><br/>
                <input type="checkbox" name="check-genre" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
                <input type="checkbox" name="check-genre" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                <input type="checkbox" name="check-genre" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Upload</label>
                <br /><br />
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
                <label htmlFor="wd-assign-to">Assign to</label><br/>
                <input type="search" placeholder="Everyone" id="wd-assign-to" defaultValue="Every One"/><br /><br />
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
                <label htmlFor="wd-due-date"> Due </label><br />
                <input type="date" defaultValue="2024-05-13" id="wd-due-date"/><br/><br />
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
                <label htmlFor="wd-available-from"> Available from </label><br />
                <input type="date" defaultValue="2024-05-06" id="wd-available-from"/>
            </td>
            <td>
                <label htmlFor="wd-available-until"> Until </label><br />
                <input type="date" defaultValue="2024-05-20" id="wd-available-until"/>
            </td>
        </tr>
        </tbody>
      </table>
    <div style={{ borderTop: "1px solid grey", margin: "20px 0"}}></div>
    <div style={{ textAlign: "left", marginLeft: "25%"}}>
    <button style={{marginRight: "5px"}}>Cancel</button>
    <button>Save</button>
    </div>
    </div>
);}
