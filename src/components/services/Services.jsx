import "./services.scss";
import ServicesList from "../servicesList/ServicesList";
import { useState, useEffect } from "react";
import {
  featuredServices,
  webServices,
  mobileServices,
  designServices,
  contentServices,
} from "../../data";

export default function Services() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Service",
    },
    {
      id: "mobile",
      title: "Mobile",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredServices);
        break;
      case "web":
        setData(webServices);
        break;
      case "mobile":
        setData(mobileServices);
        break;
      case "design":
        setData(designServices);
        break;
      case "content":
        setData(contentServices);
        break;
      default:
        setData(featuredServices);
    }
  }, [selected]);

  return (
    <div className="services" id="services">
      <h1>Services</h1>
      <ul>
        {list.map(item => (
          <ServicesList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map(d => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
