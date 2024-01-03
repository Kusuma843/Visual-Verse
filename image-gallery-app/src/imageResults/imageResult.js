import React,{Component} from "react";
import PropTypes from "prop-types";
import { GridList,GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";
import Dialog from "material-ui/Dialog";
import FlagButton from "material-ui/FlatButton"
import { FlatButton } from "material-ui";
class ImageResults extends Component{
    state={
        open:false,
        currentImg:''
    }
    handleOpen=img=>{
        this.setState({open:true,currentImg:img})
    }
    handleClose=()=>{
        this.setState({open:false});
    }
    render()
    {
       let imageLists;
       const {images}=this.props

       if(images)
       {
          imageLists=(
            <GridList cols={4}>
            {
                images.map(img=>(
                    <GridTile
                        title={img.tags}
                        key={img.id}
                        actionIcon={
                            <IconButton onClick={()=>this.handleOpen(img.largeImageURL)}>
                           <ZoomIn color="white" /> 
                           </IconButton>
                        }
                        >
                        <img src={img.largeImageURL} alt="" />
                    </GridTile>
                ))
            }
            </GridList>
          )
       }
       else{
             imageLists=null;
       }
       const action=[
        <FlatButton label="Close" primary={true} onClick={this.handleClose}/>
       ]
        return(
            <div style={{marginLeft:50,marginRight:50,marginTop:20}}>
              {imageLists}
              <Dialog
              actions={action}
              modal={false} 
              open={this.state.open}
              onRequestClose={this.handleClose}
              >
              <img src={this.state.currentImg} alt="" style={{width:"100"}}/>
              </Dialog>
            </div>
        )
    }
}
ImageResults.protoTypes={
    images:PropTypes.array.isRequired
}

export default ImageResults 