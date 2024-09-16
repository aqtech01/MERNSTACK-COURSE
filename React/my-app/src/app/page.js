import "bootstrap/dist/css/bootstrap.css";
// import PassList from "./components/passList";
// import FailList from "./components/failList";
import { marks } from "./data/result";
import StudentList from "./components/StudentList";
import Header from "./StaticFiles/header";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="row m-5">
        <div className="col-sm-6">
          <StudentList
            marks={marks.filter((x) => x >= 60)}
            title="Pass Students"
          />
        </div>
        <div className="col-sm-6">
          <StudentList
            marks={marks.filter((x) => x < 60)}
            title="Fail Students"
          />
        </div>
      </div>
    </>
  );
}
