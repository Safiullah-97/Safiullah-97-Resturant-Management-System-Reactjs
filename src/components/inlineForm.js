import React from "react";

function inlineForm() {
  return (
    <div style={{ marginLeft: "40px", marginTop: "20px" }}>
      <form>
        <div class="form-row">
          <div class="form-group">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <label for="inputPassword4">Password</label>
            <input
              type="password"
              class="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        
        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div class="form-group">
          <label for="inputAddress2">Address 2</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div class="form-group">
          <div class="form-group">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="form-group">
            <label for="inputState">State</label>
            <select id="inputState" class="form-control" style={{width: "300px"}}>
              <option selected >Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="form-group">
            <label for="inputZip">Zip</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
        </div>
        <div class="form-group" style={{marginLeft: '-18px'}}>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck"/>
            <label class="form-check-label" for="gridCheck" >
              Check me out
            </label>
          </div>
        </div>
        
        </div>
        <button type="submit" class="btn btn-primary">
          Sign in
        </button>
      </form>
    </div>
  );
}
export default inlineForm;