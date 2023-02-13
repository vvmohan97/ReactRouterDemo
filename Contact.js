import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 import './App.css';
export function Contact(){

    return(
        <>
         <div className="formdiv"> 
            <form>
            <header></header>
                <label className="label">Name</label><br/>
                <input type="text" placeholder="Your Name" className="ipt" id="name"/><br/>
                <br/><label className="label">E-mail ID</label><br/>
                <input type="email" placeholder="Your mail id" className="ipt" id="mail"/><br/>
                <br/><label className="label">Phone Number</label>
                <select className="select" name="number">
                    <option className="select" value="+91">+91</option>
                    <option className="select" value="+971">+971</option>
                    <option className="select" value="+01">+01</option> 
                </select><input type="number" placeholder="Your number" className="ipt"/>
                <button className="btn" >Submit</button>

            </form>
        </div>
        </>
    );
}