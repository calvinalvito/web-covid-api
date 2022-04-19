function main(){
    const baseUrl = "https://covid.mathdro.id/api";
    const getData = async() => {
        try{
            const response = await fetch(`${baseUrl}`);
            const responseJson = await response.json();
            if(responseJson.error){
                showResponseMessage(responseJson.message);
            }else{
                renderAllData(responseJson);
                console.log(data);
            }
        }catch(error){
            showResponseMessage(error);
        }
    }
    const renderAllData= (data) =>{
        const listDataConfirmed = document.getElementById("positif-global");
        listDataConfirmed.innerHTML =`${data.confirmed.value}`;
        const listDataRecovered = document.getElementById("sembuh-global");
        listDataRecovered.innerHTML =`${data.recovered.value}`;
        const listDataDeaths = document.getElementById("deaths-global");
        listDataDeaths.innerHTML = `${data.deaths.value}`;
        const listDataUpdate = document.getElementById("text-caption");
        listDataUpdate.innerHTML = `Daily New Cases Last Update : ${data.lastUpdate}`;
    };
    getData();
}
export default main;