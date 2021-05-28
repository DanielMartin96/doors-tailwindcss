import TabItemComponent from "./TabItemComponent";
import "./TabsComponent.css";

const TabsComponent = ({ active, setActive, tabItems }) => {
  return (
    <>
      <div className="flex tabs">
        {tabItems.map(({ id, title }) => (
          <TabItemComponent
            key={title}
            title={title}
            onItemClicked={() => setActive(id)}
            isActive={active === id}
          />
        ))}
      </div>
      <div className="content h-full">
        {tabItems.map(({ id, content }) => {
          return active === id ? content : "";
        })}
      </div>
    </>
  );
};

export default TabsComponent;
