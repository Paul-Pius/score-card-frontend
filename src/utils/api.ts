const url = process.env.REACT_APP_BASE_URL;
export const filterDevScoresByWeeks = async (id: string | number) => {
    localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiU3VwZXJBZG1pbiIsImVtYWlsIjoia2FyZWVtaWJyYWhpbTMwQGdtYWlsLmNvbSIsImlhdCI6MTY2MTc2NDM5N30.ZebZpnct2VjDvf1MY3TkeqLeLQJ6HHrjLeteou0_GzI");
    let token = localStorage.getItem('token');
    try {
        const response = await fetch(`${url}/scores/getscores`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        console.log("I am here",data);
        return data;
    } catch (error: any) {
        console.log(error);
        return { error: error.message, data: [] };
    }
};