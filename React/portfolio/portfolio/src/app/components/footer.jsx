export default function Footer() {
  return (
    <>
      <div className="row m-3">
        <div className="col-4">
          {new Date().getFullYear()} &copy; All Rights are Reserved{" "}
        </div>
        <div className="col-4">Built With 💢 by AQTECH </div>
        <div className="col-4">Terms & Condition </div>
      </div>
    </>
  );
}
