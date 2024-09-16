import { getBackgroundColor, getStatus } from "../lib/result";
import "bootstrap/dist/css/bootstrap.css";

export default function StudentList({ marks, title }) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <table>
            <tbody>
              <tr>
                <th>Sr.No</th>
                <th>Marks</th>
                <th>Status</th>
              </tr>
              {marks.map((pass, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{pass}</td>
                  <td style={{ backgroundColor: getBackgroundColor(pass) }}>
                    {getStatus(pass)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
