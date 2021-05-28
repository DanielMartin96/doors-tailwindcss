const TabItemComponent = ({
  title = "",
  onItemClicked = () => console.error("You passed no action to the component"),
  isActive = false,
}) => {
  return (
    <div
      className={isActive ? "tabitem" : "tabitem tabitem--inactive"}
      onClick={onItemClicked}
    >
      <p className="tabitem__title">{title}</p>
    </div>
  );
};

export default TabItemComponent;
