const Cart=(props)=>{
    return(
<div style={{marginBottom:500}}> 
<table class="table table-striped table-hover">
<thead>
  <tr>
  <th scope="col">Item</th>
    <th scope="col">price</th>
    <th scope="col">Quantity</th>

  </tr>
</thead>
<tbody>
  <tr>
  <td>{props.match.params.text}</td>
    <td>{props.match.params.title}</td>
    <td>{props.match.params.quantity}</td>
    
    
  </tr>
 
</tbody>

</table>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>


</div>
);
}
export default Cart;