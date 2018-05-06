class TopPanel extends React.Component {
  render() {
    return (
      <div className="topPanel">
        <div className="background" />
        <div className="inner">This is top panel</div>
      </div>
    );

  }
}

$(document).ready(() => ReactDOM.render(
  <TopPanel />,
  document.getElementById('root')
));
