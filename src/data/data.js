
const job =[
    {
        id:0,
        saved_times:0,
        type:"Full Time",
        url:"https://jobs.github.com/positions/d2805568-a0d3-4dfe-8679-12e0b2dcb7c5",
        created_at:"Tue Mar 16 16:50:06 UTC 2021",
        company:"Company A",
        company_url:"https://www.linkedin.com/in/zitao-shen-13a946120/",
        location:"Los Altos, CA",
        title:"Senior DevOps Engineer",
        skills:["C#"],
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        how_to_apply:"https://www.linkedin.com",
        company_logo:"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdEtjIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1acac1d87b69b7bcc07326a870f5333854712225/Otter_logo_blue.png"
    },
     {
         id:1,
         saved_times:3,
         type:"Full Time",
         url:"https://jobs.github.com/positions/d2805568-a0d3-4dfe-8679-12e0b2dcb7c5",
         created_at:"Tue Mar 16 16:50:06 UTC 2021",
         company:"Company B",
         company_url:"https://www.linkedin.com/in/zitao-shen-13a946120/",
         location:"Los Altos, CA",
         title:"Junior DevOps Engineer",
         skills:["Java","C"],
         description:"Libero justo laoreet sit amet cursus sit. Lorem ipsum dolor sit amet consectetur adipiscing elit. Nunc consequat interdum varius sit amet mattis. ",
         how_to_apply:"https://www.linkedin.com",
         company_logo:"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdEtjIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1acac1d87b69b7bcc07326a870f5333854712225/Otter_logo_blue.png"
     },
     {
         id:2,
         saved_times:2,
         type:"Part Time",
         url:"https://jobs.github.com/positions/d2805568-a0d3-4dfe-8679-12e0b2dcb7c5",
         created_at:"Tue Mar 16 16:50:06 UTC 2021",
         company:"Company C",
         company_url:"https://www.linkedin.com/in/zitao-shen-13a946120/",
         location:"Los Altos, CA",
         title:"UX Engineer",
         skills:["Javascript"],
         description:"Vitae tortor condimentum lacinia quis vel. Non sodales neque sodales ut etiam sit amet nisl. Gravida rutrum quisque non tellus orci ac. ",
         how_to_apply:"https://www.linkedin.com",
         company_logo:"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdEtjIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1acac1d87b69b7bcc07326a870f5333854712225/Otter_logo_blue.png"
     },
     {
         id:3,
         saved_times:4,
         type:"Full Time",
         url:"https://jobs.github.com/positions/d2805568-a0d3-4dfe-8679-12e0b2dcb7c5",
         created_at:"Tue Mar 16 16:50:06 UTC 2021",
         company:"Company D",
         company_url:"https://www.linkedin.com/in/zitao-shen-13a946120/",
         location:"Los Altos, CA",
         title:"Data Scientist",
         skills:["Python"],
         description:"Purus viverra accumsan in nisl nisi. Facilisi etiam dignissim diam quis enim. Curabitur vitae nunc sed velit dignissim sodales ut eu. ",
         how_to_apply:"https://www.linkedin.com",
         company_logo:"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdEtjIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1acac1d87b69b7bcc07326a870f5333854712225/Otter_logo_blue.png"
     },
    {
        id:4,
        saved_times:1,
        type:"Full Time",
        url:"https://jobs.github.com/positions/d2805568-a0d3-4dfe-8679-12e0b2dcb7c5",
        created_at:"Tue Mar 17 16:50:06 UTC 2021",
        company:"Company E",
        company_url:"https://www.linkedin.com/in/zitao-shen-13a946120/",
        location:"Los Altos, CA",
        title:"Director",
        skills:["Java"],
        description:"At varius vel pharetra vel turpis nunc eget. In aliquam sem fringilla ut. Diam donec adipiscing tristique risus nec feugiat in fermentum. ",
        how_to_apply:"https://www.linkedin.com",
        company_logo:"data:image/jpeg;base64,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"
    }
]

 const users = [
     {
         username: "newuser",
         password: "newuser",
         onboardingComplete: false,
         saved:[]
     },
     {
         username: "expert",
         password: "expert",
         onboardingComplete: true,
         saved:[job[0],job[1]]
     }
 ]

export const login = (username, password) => {
    for (let user in users) {
        if (username === users[user].username && password === users[user].password)
            return {
                id: user,
                username: users[user].username,
                onboardingComplete: users[user].onboardingComplete
            };
    }
    return {}
}

const updateJobSavedTime = (jobID,savedStatus)=>{
    if (savedStatus) {
        job[jobID].saved_times++;
    }else{
        job[jobID].saved_times--;
    }
}

export const userUpdateSavedJobs = (userId, jobID, savedStatus)=> {
    if(jobID===-1){
        return users[userId].saved;

    }
    // Treating the mock data as immutable...
    updateJobSavedTime(jobID,savedStatus)
    if(!savedStatus){

        if (!users[userId].saved.includes(job[jobID])) {
            users[userId].saved = [...users[userId].saved, job[jobID]]
        }

    }
    else{
        users[userId].saved = users[userId].saved.filter(function(el) { return el.id !== jobID; })
    }
    return users[userId].saved;
}

export const userCompletedOnboarding = userId => {
    users[userId].onboardingComplete = true;
    return true; // A real operation would have a return...
}

export const userStartOnboarding = userId => {
    users[userId].onboardingComplete = false;
    return true; // A real operation would have a return...
}


 export const getAllJobs=()=>{
    return job
 }

// const result = updateSavedJobs(1,0,true)
// console.log(result)

