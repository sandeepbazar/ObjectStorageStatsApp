/* 
* Copyright [2014] [SANDEEP RAMESH PATIL and SANDEEP BAZAR]

* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at

*     http://www.apache.org/licenses/LICENSE-2.0

* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * General javascript functions 
 */
	
/**
 * function to display user agreement
 */
function displayUserAgreement(){
	document.getElementById("Modal_Title_ID").innerHTML = "User Agreement"; 
	var userAgreement = '<p class="text-info">'+	
	   			'Apache jclouds <br/>'+
	   			'Copyright (C) 2009-2013 The Apache Software Foundation. <br/><br/>'+
                                
        			'This product includes software developed at <br/>'+
				'* The Apache Software Foundation (http://www.apache.org/). <br/>'+
				'* Bootstrap Framework (http://getbootstrap.com/). <br/><br/>'+			                                
	   
	   			'Developed by SANDEEP RAMESH PATIL and SANDEEP BAZAR. <br/>'+
	   			'Copyright [2014] [SANDEEP RAMESH PATIL and SANDEEP BAZAR] <br/><br/>'+
                            '</p>';
	   
	document.getElementById("Modal_body_ID").innerHTML = userAgreement;
	document.getElementById("Modal_footer_ID").innerHTML = '<button type="button" class="btn btn-mini" data-dismiss="modal">Close</button>';
	$('#Modal_ID').modal('show'); 
}

/**
 * This adapter helps to authenticate the user
 * @param ServiceEndpoint
 * @param Tenant
 * @param Username
 * @param Password
 */
function authenticateUser()
{
    var ServiceEndpoint_value = document.getElementById('ServiceEndpoint_ID').value;
    var TenantID_value = document.getElementById('Tenant_ID').value;
    var User_value = document.getElementById('Username_ID').value;
    var Password_value = document.getElementById('Password_ID').value;
    if(ServiceEndpoint_value == '' || TenantID_value == '' || User_value == '' || Password_value == '')
    {
   	alert("Empty fields not allowed.");
    }
    else if(!document.getElementById('User_Agreement_ID').checked)
    {   			
   	document.getElementById("Modal_Title_ID").innerHTML = "User Agreement";
   	document.getElementById("Modal-body_ID").innerHTML = '<p class="text-warning">Read and accept user agreement.</p>';
   	document.getElementById("Modal-footer_ID").innerHTML = '<button type="button" class="btn btn-mini" data-dismiss="modal">Close</button>'; 
   	$('#Modal_ID').modal('show'); 	
    }
    else
    {		  
   	document.getElementById("notificationMessage").innerHTML = '<p class="center text-info"> <b> Please wait ... </b> </p>';
 	document.getElementById("notificationMessage").innerHTML = '<p class="center text-warning"> <b> Authentication Successful. </b> </p>'; 
        window.location="objectstore-stats-ui/index.html";
    }        	     
    
}