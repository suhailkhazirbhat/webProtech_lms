import axios from "axios"


export const getAllNoticeAction = ()=> async dispatch =>{
    dispatch({
        type:'GET_All_NOTICE_REQUEST'
    })
    try {
        const response = await axios.get(`${process?.env?.REACT_APP_SERVER_URL}/allnotice`);
        console.log("reas",response)
        dispatch({
           type:'GET_All_NOTICE_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_All_NOTICE_FAILED',
           payload:error
       })
    }
}

export const addNoticeAction = (user) => async dispatch => {
    dispatch({
        type: 'ADD_NOTICE_REQUEST'
    })

    try {
        const res = await axios.post("process?.env?.REACT_APP_SERVER_URL/addnotice", user);
       
        dispatch({
            type: 'ADD_NOTICE_SUCCESS',
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type: 'ADD_NOTICE_FAILED',
            payload: error
        })
    }
}

export const getAllClubAction = ()=> async dispatch =>{
    dispatch({
        type:'GET_All_CLUB_REQUEST'
    })
    try {
        const response = await axios.get(`${process?.env?.REACT_APP_SERVER_URL}/allclub`);
        
        dispatch({
           type:'GET_All_CLUB_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_All_CLUB_FAILED',
           payload:error
       })
    }
}
export const getClubJoinIssAction = ()=> async dispatch =>{
    dispatch({
        type:'GET_CLUB_ISSUE_REQUEST'
    })
    try {
        const response = await axios.get(`${process?.env?.REACT_APP_SERVER_URL}/allissue`);
        
        dispatch({
           type:'GET_CLUB_ISSUE_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_CLUB_ISSUE_FAILED',
           payload:error
       })
    }
}


export const addClubAction = (user) => async dispatch => {
    dispatch({
        type: 'ADD_CLUB_REQUEST'
    })

    try {
        const res = await axios.post("process?.env?.REACT_APP_SERVER_URL/addclub", user);
       
        dispatch({
            type: 'ADD_CLUB_SUCCESS',
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type: 'ADD_CLUB_FAILED',
            payload: error
        })
    }
}

export const addSubjectAction = (user) => async dispatch => {
    dispatch({
        type: 'ADD_SUBJECT_REQUEST'
    })

    try {
        const res = await axios.post("process?.env?.REACT_APP_SERVER_URL/addSub", user);
       
        dispatch({
            type: 'ADD_SUBJECT_SUCCESS',
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type: 'ADD_SUBJECT_FAILED',
            payload: error
        })
    }
}
export const getAllSubAction = ()=> async dispatch =>{
    dispatch({
        type:'GET_All_SUBJECT_REQUEST'
    })
    try {
        const response = await axios.get(`${process?.env?.REACT_APP_SERVER_URL}/allSub`);
        console.log("reas",response)
        dispatch({
           type:'GET_All_SUBJECT_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_All_SUBJECT_FAILED',
           payload:error
       })
    }
}


export const acJoinRq = (id) => async dispatch => {
    console.log(id)
    try {
        const res = await axios.post(`${process?.env?.REACT_APP_SERVER_URL}/acjoinclub`,{id});
        const response = await axios.get(`${process?.env?.REACT_APP_SERVER_URL}/allissue`);
        
        dispatch({
           type:'GET_CLUB_ISSUE_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_CLUB_ISSUE_FAILED',
           payload:error
       })
    }
       
   
}

export const reqToJoinClubAction = (user) => async dispatch => {
    dispatch({
        type: 'JOIN_CLUB_REQUEST'
    })
    console.log(user)
    try {
        const res = await axios.post("process?.env?.REACT_APP_SERVER_URL/joinclub", user);
       
        dispatch({
            type: 'JOIN_CLUB_SUCCESS',
            payload:res.data
        })
        const response = await axios.get(`${process?.env?.REACT_APP_SERVER_URL}/allclub`);
        
        dispatch({
           type:'GET_All_CLUB_SUCCESS',
           payload:response.data
       })
    } catch (error) {
        dispatch({
            type: 'JOIN_CLUB_FAILED',
            payload: error
        })
    }
}

export const AcReqToJoinClubAction = (user) => async dispatch => {
    dispatch({
        type: 'ACJOIN_CLUB_REQUEST'
    })

    try {
        const res = await axios.post("process?.env?.REACT_APP_SERVER_URL/acjoinclub", user);
       
        dispatch({
            type: 'ACJOIN_CLUB_SUCCESS',
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type: 'ACJOIN_CLUB_FAILED',
            payload: error
        })
    }
}

export const getAllFaculty = ()=> async dispatch =>{
    dispatch({
        type:'GET_All_FACULTY_REQUEST'
    })
    try {
        const response = await axios.get(`${process?.env?.REACT_APP_SERVER_URL}/getAllFac`);
        console.log("reas",response)
        dispatch({
           type:'GET_All_FACULTY_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_All_FACULTY_FAILED',
           payload:error
       })
    }
}