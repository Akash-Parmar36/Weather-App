import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";

export default function InfoBox({Info}){
    
    let INIT_URL = "https://plus.unsplash.com/premium_photo-1667239532950-db28085dacd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWlzdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
 
    let HOT_URL = "https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.webp?a=1&b=1&s=612x612&w=0&k=20&c=DPDwtq156djUSKSd57TR23BmU4vzC8xqolwMkqHCdfU=";
    let COLD_URL = "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhaW58ZW58MHx8MHx8fDA%3D";

    return (
        <div className='InfoBox'>
           <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Info.humidity > 80 ? RAIN_URL : Info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           {Info.city}&nbsp;&nbsp;{Info.humidity > 80 ? <ThunderstormIcon /> : Info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span"> 
                <p>Temperature = {Info.temp}&deg;C</p> 
                <p>Humidity = {Info.humidity}</p>
                <p>Min Temp = {Info.tempMin}&deg;C</p>
                <p>Max Temp = {Info.tempMax}&deg;C</p>
                <p>The weather can be described as {Info.weather} and feels like as {Info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
</div>
 
    );
}