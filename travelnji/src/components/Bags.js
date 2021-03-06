

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import img from "../assets/logo.jpg";
import bag from "../assets/bag.jpg";
const useStyles = makeStyles((theme) => ({
   root: {
    maxWidth: 345,

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    color:"#002884"
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
        color:"#002884",

    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },





}));

export default function Bags() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (

<div style ={h1} >
<div style={h4}>Bags are tricky when it comes to sustainability – there are a lot of different materials and they all have pros and cons. Leather comes with a slew of tanning and cruelty issues while the vegan alternatives tend to be made of plastics or have plastic coatings. There are no “perfect” choices however I’ve rounded up some options and brands which I think are producing their products more consciously</div>


    <div style={h2} >
    <br></br>     <br></br>

    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
                      aria-label="recipe"
                      src={img}
                      className={classes.avatar}
                    />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="MagicBag"
      
      />
      <CardMedia
        className={classes.media}
        image="https://d3ohujkwfq90t4.cloudfront.net/1000x1200/products/2839%2F2000-3000-2024-DSC_0001.jpg"
        title=" magic bag "
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        MagicBag works to maintain the temperature of food for a long time by using the finest fabrics and heat insulators, and it depends on slow cooking of food.
        </Typography>
      </CardContent>

      <Button aria-label="visit" href="https://web.facebook.com/magicbagcooker/?_rdc=1&_rdr">
                      
                     visit facebook page 
                      </Button>
     
    </Card>
    </div>


    <div style={h2}>
    <br></br><br></br>
   
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
                      aria-label="recipe"
                      src={img}
                      className={classes.avatar}
                    />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Reusable Produce Bags"
      
      />
      <CardMedia
        className={classes.media}
        image="https://images-na.ssl-images-amazon.com/images/I/91VXMq5-sAL._SS400_.jpg"
        title=" Reusable Produce Bags "
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
 Cotton Produce bags - ORGANIC COTTON PRODUCE BAGS: - Our Reusable Produce Bags-Net bags for packaging, shipping, and storing Veggies in the refrigerator. These reusable produce shopping bags are manufactured with GOTS certified organic cotton, adopting & modern techniques and following the set norms of the market.


        </Typography>
      </CardContent>

      <Button aria-label="visit" href="https://www.jordan.ubuy.com/en/search/index/view/product/B074Z6DV26/s/produce-bags-reusable-produce-bags-grocery-reusable-mesh-produce-bags-netzero-produce-bags-eco-friendly-produce-bags-reusable-cotton-produce-bags-set-of-6-xl-l-m/store/store/kk/dp">
                      
                     Visit Website
                      </Button>
     
    </Card>
    </div>


      


    <div style={h2}>
    <br></br><br></br>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
                      aria-label="recipe"
                      src={img}
                      className={classes.avatar}
                    />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Tote bages"
      
      />
      <CardMedia
        className={classes.media}
        image="https://scontent.famm9-1.fna.fbcdn.net/v/t1.0-9/83779752_1502132486611127_856719871017222144_n.jpg?_nc_cat=100&_nc_sid=8bfeb9&_nc_eui2=AeFM8Kq7DE8882Q_-UCQFCRkRpGIC_AEk-ZGkYgL8AST5uj1PIxL5GRLnURKz9Q5vT4h0782Mr2lJNJnPB1F3VdZ&_nc_ohc=nnA-3RQdXLMAX8d74tc&_nc_ht=scontent.famm9-1.fna&oh=8d0704edea202f7724dd3f378104c1be&oe=5F985F2C"
        title=" magic bag "
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
tote bags from leftover materials of our tipis! Colourful, sustainable and durable!         </Typography>
      </CardContent>

      <Button aria-label="visit" href="https://web.facebook.com/malfoufecobags/?_rdc=1&_rdr">
                      
                     visit facebook page 
                      </Button>
     
    </Card>
    </div>

    <div style={h2} ><br></br><br></br>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          
          <Avatar
                      aria-label="recipe"
                      src={img}
                      className={classes.avatar}
                    />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shopping Bag"
      
      />
      <CardMedia
        className={classes.media}
        image={bag}
        title=" magic bag "
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
this type of bag can be made of eco friendly plastic materials biodegrable shopping bags and can be custmized colored plastic.        </Typography>
      </CardContent>

      <Button aria-label="visit" href="https://www.jshpf.com/shopping-bags.html">
                      
                     visit facebook page 
                      </Button>
     
    </Card>
    </div>

   


    </div>


  );
}

const h1={
//   "width":" 50%",
//  " minHeight":"50%",
//   "margin":"10 auto",
   
//    " grid-template-columns":" repeat(auto-fill, minmax(230px, 1fr))",
//    " grid-gap": "50px",

   
// "  width":"100%",
//   " display ": "flex",
//   "justify-content": "center"
// }

"display": "flex",
 "   flex-direction": "row",
    "flex-wrap": "wrap",
  "  justify-content": "center",
   " align-items": "center"




        }

const h2={
  "  width":"50%",
  " display ": "flex",
  "justify-content": "center",

" minHeight":"50%",
  // "display": "-webkit-box",
  "-webkit-box-pack": "center",
 " -webkit-box-align": "center",
  "margin": "auto",
  // "position": "absolute",
  "left":"0",
  "right": "0",
  "top": "0",
  "bottom": "0",

}
const h4={
" box-sizing":" border-box",
  "width": "100%",
  // "display": "flex",
 " justify-content": "center",
  "padding": "1em",
  "margin-bottom":" 2em",
  "background-color": "#e57373",
  "color": "#fff",
}
