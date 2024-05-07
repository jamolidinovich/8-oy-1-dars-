import React from "react";
import "./index.css";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import icon from "../../assets/Icon.png";
import icon2 from "../../assets/Icon (1).png";
import icon3 from "../../assets/Icon (2).png";
import line from "../../assets/line.svg";
import pp from "../../assets/PP.svg";
import pp1 from "../../assets/PP (1).svg";
import pp2 from "../../assets/PP (2).svg";
import pp3 from "../../assets/PP (3).svg";
import pp4 from "../../assets/PP (4).svg";
import chart from "../../assets/Chart.png";
import chart1 from "../../assets/Chart (1).png";
import path from "../../assets/Path 2.png";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const barData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 7500,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 4500,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 3000,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 5508,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4000,
    amt: 2181,
  },
];
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
function Figma() {
  return (
    <div className="containerr">
      <div className="left">
        <div className="cards">
          <div className="card">
            <div>
              <img
                className="img"
                width={"56px"}
                height={"56px"}
                src={icon}
                alt=""
              />
            </div>
            <div className="desc">
              <p style={{ color: "#92929D" }}>Tracking loyihalari</p>
              <span style={{ fontSize: "23px", color: "blue" }}>5 ta</span>
              <p>(7 ta subloyiha)</p>
            </div>
          </div>
          <div className="card">
            <div>
              <img
                className="img"
                width={"56px"}
                height={"56px"}
                src={icon2}
                alt=""
              />
            </div>
            <div className="desc">
              <p style={{ color: "#92929D" }}>Sharh olish loyihalari</p>
              <span style={{ fontSize: "23px", color: "blue" }}>15 ta</span>
              <p>(7 ta subloyiha)</p>
            </div>
          </div>{" "}
          <div className="card">
            <div>
              <img
                className="img"
                width={"56px"}
                height={"56px"}
                src={icon3}
                alt=""
              />
            </div>
            <div className="desc">
              <p style={{ color: "#92929D" }}>Mijozlar</p>
              <span style={{ fontSize: "23px", color: "blue" }}>12,345 ta</span>
              <p>(563 ta saralanmagan)</p>
            </div>
          </div>
        </div>
        <div
          style={{
            borderRadius: "22px",
            background: "white",
            marginTop: "30px",
            padding: "25px",
          }}
          className="cart"
        >
          <div>
            <h1 style={{ fontSize: "30px", marginBottom: "15px" }}>
              Tracking loyihasi
            </h1>
            <hr style={{ marginBottom: "30px" }} />
          </div>
          <div style={{ color: "#A6B1BB" }}>
            <div style={{ alignItems: "center" }}>
              <h1 style={{ marginBottom: "14px" }}>120</h1>

              <h1 style={{ marginBottom: "14px" }}>100</h1>

              <h1 style={{ marginBottom: "14px", marginLeft: "5px" }}>80</h1>
              <h1 style={{ marginBottom: "14px", marginLeft: "5px" }}>60</h1>
              <h1 style={{ marginBottom: "14px", marginLeft: "5px" }}>40</h1>
              <h1 style={{ marginBottom: "14px", marginLeft: "5px" }}>20</h1>
              <h1 style={{ marginBottom: "14px", marginLeft: "7px" }}>0</h1>
            </div>
            <div className="diograma">
              <img className="line" src={line} alt="" srcset="" />
              <BarChart
                className="bar"
                width={800}
                height={250}
                data={barData}
                margin={{
                  top: 0,
                  right: 30,
                  left: 50,
                  bottom: 0,
                }}
                barSize={30}
              >
                <Bar
                  dataKey="pv"
                  fill="#5E3AFF"
                  background={{ fill: "#eee" }}
                />
              </BarChart>
            </div>
            <div style={{ background: "red" }}></div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "921px",
              marginLeft: "50px",
              color: "#A6B1BB",
              marginTop: "30px",
            }}
          >
            <p>SMS yuborilganlar</p> <p>Linkga kirganlar</p>{" "}
            <p>
              Mahsulot sahifasiga <br /> kirganlar
            </p>{" "}
            <p>Sotib olganlar</p> <p>Izoh qoldirganlar</p>
          </div>
        </div>
        <div
          style={{ width: "1080px", background: "white", marginTop: "30px" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1
              style={{
                fontSize: "40px",
                marginTop: "40px",
                marginLeft: "30px",
                marginBottom: "50px",
              }}
            >
              #Tag lar
            </h1>
            <div style={{ marginLeft: "600px", marginTop: "40px" }}>
              <h2 style={{ fontSize: "40px" }}>120 ta</h2>
              <p>umumiy #tag lar soni</p>
            </div>
            <hr />
          </div>
          <hr style={{ marginBottom: "50px", display: "block" }} />
          <div style={{ display: "flex" }}>
            <div style={{ width: "300px", marginLeft: "30px" }}>
              <div>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      borderRadius: "50px",
                      background: "blue",
                      width: "20px",
                      height: "20px",
                      marginRight: "15px",
                    }}
                  ></span>
                  Bolalar uchun
                  <span style={{ fontSize: "30px", marginLeft: "90px" }}>
                    15.7k
                  </span>
                </p>
                <hr />
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      borderRadius: "50px",
                      background: "blue",
                      width: "20px",
                      height: "20px",
                      marginRight: "15px",
                    }}
                  ></span>
                  Bolalar uchun
                  <span style={{ fontSize: "30px", marginLeft: "90px" }}>
                    15.7k
                  </span>
                </p>
                <hr />
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      borderRadius: "50px",
                      background: "blue",
                      width: "20px",
                      height: "20px",
                      marginRight: "15px",
                    }}
                  ></span>
                  Bolalar uchun
                  <span style={{ fontSize: "30px", marginLeft: "90px" }}>
                    15.7k
                  </span>
                </p>
                <hr />
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      borderRadius: "50px",
                      background: "blue",
                      width: "20px",
                      height: "20px",
                      marginRight: "15px",
                    }}
                  ></span>
                  Bolalar uchun
                  <span style={{ fontSize: "30px", marginLeft: "90px" }}>
                    15.7k
                  </span>
                </p>
                <hr />
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      borderRadius: "50px",
                      background: "blue",
                      width: "20px",
                      height: "20px",
                      marginRight: "15px",
                    }}
                  ></span>
                  Bolalar uchun
                  <span style={{ fontSize: "30px", marginLeft: "90px" }}>
                    15.7k
                  </span>
                </p>
                <hr />
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      borderRadius: "50px",
                      background: "blue",
                      width: "20px",
                      height: "20px",
                      marginRight: "15px",
                    }}
                  ></span>
                  Bolalar uchun
                  <span style={{ fontSize: "30px", marginLeft: "90px" }}>
                    15.7k
                  </span>
                </p>
              </div>
            </div>
            <div style={{ width: "300px", marginLeft: "30px" }}>
              <div>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      borderRadius: "50px",
                      background: "blue",
                      width: "20px",
                      height: "20px",
                      marginRight: "15px",
                    }}
                  ></span>
                  Bolalar uchun
                  <span style={{ fontSize: "30px", marginLeft: "90px" }}>
                    15.7k
                  </span>
                </p>
                <hr />
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      borderRadius: "50px",
                      background: "blue",
                      width: "20px",
                      height: "20px",
                      marginRight: "15px",
                    }}
                  ></span>
                  Bolalar uchun
                  <span style={{ fontSize: "30px", marginLeft: "90px" }}>
                    15.7k
                  </span>
                </p>
                <hr />
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      borderRadius: "50px",
                      background: "blue",
                      width: "20px",
                      height: "20px",
                      marginRight: "15px",
                    }}
                  ></span>
                  Bolalar uchun
                  <span style={{ fontSize: "30px", marginLeft: "90px" }}>
                    15.7k
                  </span>
                </p>
                <hr />
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      borderRadius: "50px",
                      background: "blue",
                      width: "20px",
                      height: "20px",
                      marginRight: "15px",
                    }}
                  ></span>
                  Bolalar uchun
                  <span style={{ fontSize: "30px", marginLeft: "90px" }}>
                    15.7k
                  </span>
                </p>
                <hr />
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      borderRadius: "50px",
                      background: "blue",
                      width: "20px",
                      height: "20px",
                      marginRight: "15px",
                    }}
                  ></span>
                  Bolalar uchun
                  <span style={{ fontSize: "30px", marginLeft: "90px" }}>
                    15.7k
                  </span>
                </p>
                <hr />
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      borderRadius: "50px",
                      background: "blue",
                      width: "20px",
                      height: "20px",
                      marginRight: "15px",
                    }}
                  ></span>
                  Bolalar uchun
                  <span style={{ fontSize: "30px", marginLeft: "90px" }}>
                    15.7k
                  </span>
                </p>
              </div>
            </div>
            <div style={{ width: "300px", marginLeft: "30px" }}>
              <div>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      borderRadius: "50px",
                      background: "blue",
                      width: "20px",
                      height: "20px",
                      marginRight: "15px",
                    }}
                  ></span>
                  Bolalar uchun
                  <span style={{ fontSize: "30px", marginLeft: "90px" }}>
                    15.7k
                  </span>
                </p>
                <hr />
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      borderRadius: "50px",
                      background: "blue",
                      width: "20px",
                      height: "20px",
                      marginRight: "15px",
                    }}
                  ></span>
                  Bolalar uchun
                  <span style={{ fontSize: "30px", marginLeft: "90px" }}>
                    15.7k
                  </span>
                </p>
                <hr />
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      borderRadius: "50px",
                      background: "blue",
                      width: "20px",
                      height: "20px",
                      marginRight: "15px",
                    }}
                  ></span>
                  Bolalar uchun
                  <span style={{ fontSize: "30px", marginLeft: "90px" }}>
                    15.7k
                  </span>
                </p>
                <hr />
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      borderRadius: "50px",
                      background: "blue",
                      width: "20px",
                      height: "20px",
                      marginRight: "15px",
                    }}
                  ></span>
                  Bolalar uchun
                  <span style={{ fontSize: "30px", marginLeft: "90px" }}>
                    15.7k
                  </span>
                </p>
                <hr />
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      borderRadius: "50px",
                      background: "blue",
                      width: "20px",
                      height: "20px",
                      marginRight: "15px",
                    }}
                  ></span>
                  Bolalar uchun
                  <span style={{ fontSize: "30px", marginLeft: "90px" }}>
                    15.7k
                  </span>
                </p>
                <hr />
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      borderRadius: "50px",
                      background: "blue",
                      width: "20px",
                      height: "20px",
                      marginRight: "15px",
                    }}
                  ></span>
                  Bolalar uchun
                  <span style={{ fontSize: "30px", marginLeft: "90px" }}>
                    15.7k
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reight">
        <div
          style={{
            width: "390px",
            background: "white",
            borderRadius: "20px",
            padding: "20px",
            marginBottom: "30px",
          }}
        >
          <h1 style={{ fontSize: "18px", marginBottom: "10px" }}>
            1 oylik SMS lar
          </h1>
          <hr />
          <span
            style={{ fontSize: "18px", marginTop: "15px", display: "block" }}
          >
            Umumiy
          </span>
          <h2 style={{ fontSize: "35px", marginTop: "15px" }}>1000 ta</h2>
          <hr />
          <div>
            <div
              style={{
                display: "flex",
                marginTop: "20px",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <img src={chart} alt="" />
              <div>
                <h1 style={{ fontSize: "30px" }}>740 ta</h1>
                <span>Yetib borgan</span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "20px",
                alignItems: "center",

                gap: "15px",
              }}
            >
              <img src={chart1} alt="" />
              <div>
                {" "}
                <h1 style={{ fontSize: "30px" }}>260 ta</h1>
                <span>Hatolik bo’lgan</span>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "390px",
            background: "white",
            borderRadius: "20px",
            padding: "20px",
            marginBottom: "30px",
          }}
        >
          <img
            style={{
              marginTop: "30px",
              marginLeft: "35px",
            }}
            src={path}
            alt=""
          />
          <div>
            <h1 style={{ fontSize: "30px" }}>234 ta</h1>
            <span>bu oygi feedbacklar</span>
          </div>
        </div>
        <div>
          <div className="interation">
            <h1 className="interation-title">Integratsiyalar</h1>
            <div className="cardss">
              <div className="interation-card">
                <div className="circle-card-info">
                  <span>
                    <img src={pp} alt="" width={45} height={45} />
                  </span>
                  <div className="card-title">
                    <h1 className="card-title-name">AmoCrm</h1>
                    <p
                      style={{ marginLeft: "-40px" }}
                      className="card-title-bot"
                    >
                      CRM
                    </p>
                  </div>
                </div>
                <span className="edit">
                  <BorderColorOutlinedIcon></BorderColorOutlinedIcon>
                </span>
              </div>

              <div className="interation-card">
                <div className="circle-card-info">
                  <span>
                    <img src={pp1} alt="" width={45} height={45} />
                  </span>
                  <div className="card-title">
                    <h1
                      style={{ marginLeft: "-15px" }}
                      className="card-title-name"
                    >
                      TelegramBot
                    </h1>
                    <p
                      style={{ marginLeft: "10px" }}
                      className="card-title-bot"
                    >
                      Habar yuboruvchi
                    </p>
                  </div>
                </div>
                <span className="edit">
                  <BorderColorOutlinedIcon></BorderColorOutlinedIcon>
                </span>
              </div>

              <div className="interation-card">
                <div className="circle-card-info">
                  <span>
                    <img src={pp2} alt="" width={45} height={45} />
                  </span>
                  <div className="card-title">
                    <h1
                      style={{ marginLeft: "-75px" }}
                      className="card-title-name"
                    >
                      Trello
                    </h1>
                    <p
                      style={{ marginLeft: "15px" }}
                      className="card-title-bot"
                    >
                      Task Management
                    </p>
                  </div>
                </div>
                <span className="edit">
                  <BorderColorOutlinedIcon></BorderColorOutlinedIcon>
                </span>
              </div>

              <div className="interation-card">
                <div className="circle-card-info">
                  <span>
                    <img src={pp3} alt="" width={45} height={45} />
                  </span>
                  <div className="card-title">
                    <h1
                      style={{ marginLeft: "10px" }}
                      className="card-title-name"
                    >
                      Bitrix
                    </h1>
                    <p
                      style={{ marginLeft: "10px" }}
                      className="card-title-bot"
                    >
                      CRM
                    </p>
                  </div>
                </div>
                <span className="edit">
                  <BorderColorOutlinedIcon></BorderColorOutlinedIcon>
                </span>
              </div>

              <div className="interation-card">
                <div className="circle-card-info">
                  <span>
                    <img src={pp4} alt="" width={45} height={45} />
                  </span>
                  <div className="card-title">
                    <h1
                      style={{ marginLeft: "10px" }}
                      className="card-title-name"
                    >
                      IP Phone
                    </h1>
                    <p className="card-title-bot">Phone</p>
                  </div>
                </div>
                <span className="edit">
                  <BorderColorOutlinedIcon></BorderColorOutlinedIcon>
                </span>
              </div>
            </div>
            <p className="more-info">
              <a href="#">Barcha integratsiyalar</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Figma;
