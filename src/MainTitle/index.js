import './MainTitle.css';
function MainTitle(props) {
  const {title} = props;
  return (
    <div className="main-title spacing">
      <h2>{title}</h2>
    </div>
  );
}

export default MainTitle;