import React from "react";
import { logout } from "./utilities";

function SetReminder() {
  const [data, setData] = React.useState({
    date: "",
    subject: "",
    description: "",
    email: "",
    contact: "",
    sms: "",
    recur: "",
    enable: true,
  });
  function fillData(value, type) {
    if (type === "date") {
      setData((prev) => {
        return { ...prev, date: value };
      });
    }
    if (type === "subject") {
      setData((prev) => {
        return { ...prev, subject: value };
      });
    }
    if (type === "description") {
      setData((prev) => {
        return { ...prev, description: value };
      });
    }
    if (type === "contact") {
      setData((prev) => {
        return { ...prev, contact: value };
      });
    }
    if (type === "sms") {
      setData((prev) => {
        return { ...prev, sms: value };
      });
    }
    if (type === "email") {
      setData((prev) => {
        return { ...prev, email: value };
      });
    }
    if (type === "recur") {
      setData((prev) => {
        return { ...prev, recur: value };
      });
    }
    return;
  }
  function SubmitReminder() {
    if (!(data.date || data.email || data.description || data.subject)) {
      alert("Fill Date, Subject, Email and Description properly.");
      return;
    }
    let reminder = JSON.parse(localStorage.getItem("reminder"));
    reminder.push(data);
    localStorage.setItem("reminder", JSON.stringify(reminder));
    window.location.href = "/thank-you";
    return;
  }

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "80%",
            textAlign: "center",
          }}
        >
          <h3>Set a new Reminder</h3>
          <br />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "25px",
              textAlign: "start",
            }}
          >
            <label htmlFor="date">Select a Date : </label>
            <input
              type="date"
              onChange={(e) => fillData(e.target.value, "date")}
              name="date"
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "25px",
            }}
          >
            <label htmlFor="subject">Select a Subject : </label>
            <select
              name="subject"
              onChange={(e) => fillData(e.target.value, "subject")}
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "25px",
            }}
          >
            <label htmlFor="description">Add Description : </label>
            <textarea
              type="text"
              onChange={(e) => fillData(e.target.value, "description")}
              name="description"
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "25px",
            }}
          >
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              onChange={(e) => fillData(e.target.value, "email")}
              name="email"
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "25px",
            }}
          >
            <label htmlFor="contact">Contact No. : </label>
            <input
              type="number"
              onChange={(e) => fillData(e.target.value, "contact")}
              name="contact"
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "25px",
            }}
          >
            <label htmlFor="sms">SMS : </label>
            <input
              type="text"
              onChange={(e) => fillData(e.target.value, "sms")}
              name="sms"
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "25px",
            }}
          >
            <label htmlFor="recur">Recur For Next : </label>
            <input
              type="radio"
              onChange={(e) => fillData(e.target.value, "recur")}
              name="recur"
              value="7 days"
            />
            <label htmlFor="7 days">7 Days</label>
            <input
              type="radio"
              onChange={(e) => fillData(e.target.value, "recur")}
              name="recur"
              value="5 days"
            />
            <label htmlFor="5 days">5 Days</label>
            <input
              type="radio"
              onChange={(e) => fillData(e.target.value, "recur")}
              name="recur"
              value="3 days"
            />
            <label htmlFor="3 days">3 Days</label>
            <input
              type="radio"
              onChange={(e) => fillData(e.target.value, "recur")}
              name="recur"
              value="2 days"
            />
            <label htmlFor="2 days">2 Days</label>
          </div>

          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <button
              type="submit"
              onClick={SubmitReminder}
              style={{ padding: "5px", marginTop: "10px" }}
            >
              Confirm
            </button>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <a href="/home">Back</a>
            <button type="submit" onClick={logout} style={{ padding: "3px" }}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default SetReminder;
