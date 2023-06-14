import axios from "axios"

export const getStudentByClass = (clsName)=> async dispatch =>{
    dispatch({
        type:'GET_STUDENTS_REQUEST'
    })
  
    try {
        dispatch({
            type:'GET_STUDENTS_SUCCESS',
            payload:null
        })
       
        const response = await axios.post(`${process?.env?.REACT_APP_SERVER_URL}/getStuByClass',clsName`);
         // console.log(response.data);
        dispatch({
           type:'GET_STUDENTS_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_STUDENTS_FAILED',
           payload:error
       })
    }
}
export const makeStuAttendance = (clsName,obj)=> async dispatch =>{
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
    };
    try {
        
        const response = await axios.post(`${process?.env?.REACT_APP_SERVER_URL}/makeAttdence`,obj,config);

        console.log("response",response);
      
         const response1 = await axios.post(`${process?.env?.REACT_APP_SERVER_URL}/getStuByClass`,clsName);
        console.log(response1);
        // console.log("oksklsllsls")
        dispatch({
           type:'GET_STUDENTS_SUCCESS',
           payload:response1.data
       })
    } catch (error) {
       dispatch({
           type:'GET_STUDENTS_FAILED',
           payload:error
       })
    }   
}

export const uploadStuMark = (clsName,obj)=> async dispatch =>{
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
    };
    try {
        
        const response = await axios.post(`${process?.env?.REACT_APP_SERVER_URL}/uploadMark`,obj,config);

        console.log("response",response);
      
         const response1 = await axios.post(`${process?.env?.REACT_APP_SERVER_URL}/getStuByClass`,clsName);
        console.log(response1);
        // console.log("oksklsllsls")
        dispatch({
           type:'GET_STUDENTS_SUCCESS',
           payload:response1.data
       })
    } catch (error) {
       dispatch({
           type:'GET_STUDENTS_FAILED',
           payload:error
       })
    }   
}

export const getAllStudent = ()=> async dispatch =>{
    dispatch({
        type:'GET_All_STUDENTS_REQUEST'
    })
    try {
        const response = await axios.get(`${process?.env?.REACT_APP_SERVER_URL}/getAllStuClass`);
        console.log("reas",response)
        dispatch({
           type:'GET_All_STUDENTS_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_All_STUDENTS_FAILED',
           payload:error
       })
    }
}

export const getAllRportAction = ()=> async dispatch =>{
    dispatch({
        type:'GET_All_REPORT_REQUEST'
    })
    try {
        const response = await axios.get(`${process?.env?.REACT_APP_SERVER_URL}/allreport`);
     
        dispatch({
           type:'GET_All_REPORT_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_All_REPORT_FAILED',
           payload:error
       })
    }
}

export const addReportAction = (user) => async dispatch => {
    dispatch({
        type: 'ADD_REPORT_REQUEST'
    })

    try {
        const res = await axios.post(`${process?.env?.REACT_APP_SERVER_URL}/addreport`, user);
       
        dispatch({
            type: 'ADD_REPORT_SUCCESS',
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type: 'ADD_REPORT_FAILED',
            payload: error
        })
    }
}


export const updateTProfileAction = (user) => async dispatch => {
    dispatch({
        type: 'UPDATE_TPROFILE_REQUEST'
    })

    try {
        const res = await axios.post(`${process?.env?.REACT_APP_SERVER_URL}/api/teac/teaUpd`, user);
       
        dispatch({
            type: 'UPDATE_TPROFILE_SUCCESS',
            payload:res.data
        })

        window.location.href = "/teacher/dashboard";

    } catch (error) {
        dispatch({
            type: 'UPDATE_PROFILE_FAILED',
            payload: error
        })
    }
}


export const updateProfileAction = (user) => async dispatch => {
    dispatch({
        type: 'UPDATE_PROFILE_REQUEST'
    })

    try {
        const res = await axios.post(`${process?.env?.REACT_APP_SERVER_URL}/stuUpd`, user);
       
        dispatch({
            type: 'UPDATE_PROFILE_SUCCESS',
            payload:res.data
        })

        window.location.href = "/student/dashboard";

    } catch (error) {
        dispatch({
            type: 'UPDATE_PROFILE_FAILED',
            payload: error
        })
    }
}
