import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../../node_modules/glyphicons-only-bootstrap/css/bootstrap.min.css';
export default class Chat extends React.Component {
    constructor(props){
      super(props);
       this.state={chat_value:'',
                    menu_value:'',
                    text:'',
                selectValue:'Shwetha',
                user:'Shwetha',
                drop_title:''};
    //    this.enterValue = this.enterValue.bind(this);
    //    this.chatchangevalue = this.enterValue.bind(this);
    }
    chatchangevalue(event){
        this.setState({chat_value: event.target.value});
        // alert('I am being called'+this.state.chat_value);
       }
       handleChange(event){
        this.setState({selectValue:event.target.value});
       }
       changedropdownvalue(event){
        //   var display = event.target.value;
           this.setState({drop_title:event.target.value});
          // alert(display);
       }
       movetochat(event){
        if(event.key == 'Enter'){ 
            // alert('Demo');
           document.getElementById("chattext").focus();
        }
       }
        openNav(event) {
        document.getElementById("mySidebar").style.cssText = "width:250px";
        document.getElementById("main").style.cssText = "margin-left:250px";
      }
      
     closeNav(event) {
        document.getElementById("mySidebar").style.cssText = "width:0px";
        document.getElementById("main").style.cssText= "margin-left:0px";
      }
      
    enterValue = (event) => {
        if(event.key == 'Enter'){
        //   console.log('enter press here! ')
        //alert('You entered text'+this.state.chat_value);
         var send_val = this.state.chat_value;
        // echo '<p>' . $send_val . "</p>";

         //this.setState({chat_value:''});
        //  return (
        //      <p>This is a trial of  </p>
             

        //  );
        // <div>
       // document.write("<h1>Hello World!</h1><p>Have a nice day!</p>");

        // document.getElementById("demo").innerHTML='This is trial'+send_val;
        // var e = document.getElementById("basic-nav-dropdown");
        // var strUser = e.NavDropdown.Item[e.selectedIndex].value;
        var new_value= this.state.drop_title;
        if(this.state.drop_title=='Shwetha'){
        // var add_style=document.getElementById("demo");
        // add_style.style.setProperty("text-align","left","important");
        //document.getElementById("demo").innerHTML +='<br>'+send_val+'<br>';
        // document.getElementById("trial")
        //document.createElement("P");
        var para = document.createElement("P");
        var t = document.createTextNode(new_value+': '+send_val);
        para.style.cssText = 'text-align:left;color:white;font-size:calc(10px + 2vmin);margin-left:15px;font-family:Roboto;font-weight:bold;';
        para.appendChild(t);
        document.body.appendChild(para);      
        this.setState({chat_value:''});
        // this.setState({user:'Someone_else'})
        // document.getElementById("demo").id ="demo1"
        }
        else if(this.state.drop_title==''){
            alert('Enter Username');
        }
        else{
            //var add_style=document.getElementById("demo");
            // add_style.style.setProperty("text-align","right","important");
           // document.getElementById("demo1").innerHTML += send_val+'<br>';
           var newdiv = document.createElement("DIV");
           var para = document.createElement("P");
        var t = document.createTextNode(new_value+': '+send_val);
        newdiv.style.cssText = 'display:block;overflow:auto';
        para.style.cssText = 'text-align:right;color:white;font-size:calc(10px + 2vmin);margin-right:15px;font-family:Arial;font-weight:bold;';
        para.appendChild(t);
        newdiv.appendChild(para);
        document.body.appendChild(newdiv);      
        
            this.setState({chat_value:''});
            // this.setState({user:'Shwetha'})    
        }
        }
    }      
    render(){
        return (
            <div>
               <div id="mySidebar" className="sidebar">
  <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav.bind(this)}>×</a>
  <br></br><br></br><br></br>
  <span className="trial-label">Chat_Demo:User List</span>
  <hr></hr>
  <button type="button" className="btn btn-link" value="Shwetha" onClick={this.changedropdownvalue.bind(this)}>Myself</button>
  <button type="button" className="btn btn-link" value="Shruthi" onClick={this.changedropdownvalue.bind(this)}>Shruthi</button>
  <button type="button" className="btn btn-link" value="Sneha" onClick={this.changedropdownvalue.bind(this)}>Sneha</button>
  <button type="button" className="btn btn-link" value="Mr.X" onClick={this.changedropdownvalue.bind(this)}>Mr.X</button>

  {/* <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a> */}
</div>

<div id="main">
  {/* <button className="openbtn" onClick={this.openNav.bind(this)}>☰ Toggle Sidebar</button>   */}
  {/* <button className="openbtn" onClick={this.openNav.bind(this)}><i className="fa fa-angle-right"></i></button> */}
  <button type="button" className="btn btn-link" onClick={this.openNav.bind(this)}>
          <span className="glyphicon glyphicon-chevron-right glyph-size"></span> 
        </button>

</div>
            <div className="Rectangle col">
                {/* <div className="container-fluid chatbar fixed-bottom"> */}
                <div className="form-group fixed-bottom visibility">
                    <input id="chattext" type="text" placeholder="Enter text here" className="form-control mr-sm-2" onChange={this.chatchangevalue.bind(this)} onKeyPress={this.enterValue} value={this.state.chat_value}></input>
                </div>
                {/* <div className="form-group chatbar">
                <input className="form-control mr-sm-2" type="search" placeholder="Type Name" aria-label="Search" onChange={this.changedropdownvalue.bind(this)} value={this.state.drop_title} onKeyPress={this.movetochat.bind(this)}></input>
                </div> */}
                {/* <div className="form-group">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                </div> */}

            </div>
                                {/* <div id="trial">
                                    <p id="demo" className="para-left"></p>
                                    <p id="demo1" className="para-right"></p>
                                </div> */}
            </div>
        );

    }
}  