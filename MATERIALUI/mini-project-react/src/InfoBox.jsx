import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function infoBox({info}){

    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612119276551-be9efb8ea36a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    return (
        <div className="InfoBox">
           <div className='cardContainer'>
           <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL }
        title="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" >
          {info.city}{
            info.humidity > 80 
            ? <ThunderstormIcon /> 
            : info.temp > 15 
            ? <WbSunnyIcon/> : <AcUnitIcon/> 
            }
          
        </Typography>
        <Typography variant="body2" color="text.secondary">
           <div>Temperature = {info.temp}&deg;C</div>
           <div>Humidity = {info.humidity}</div>
           <div>Min Temp = {info.tempMin}&deg;C</div>
           <div>Max Temp = {info.tempMax}&deg;C</div>
           <div>The Weather can be described as <i> {info.weather} </i> and Feels Like = {info.feels_like}&deg;C</div>
           
        </Typography>
      </CardContent>
    </Card>
    </div>
       </div>
   )
  
}


