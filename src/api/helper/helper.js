// Contains all helper functions that does not add to logic.

// function to cause delay
function delay(time){
    return new Promise((resolve)=>{
        setTimeout(resolve,time)
    });
}

// function to return status 
function returnStatus(status){
    return {
        "status":status
    }

}


export {returnStatus,delay}