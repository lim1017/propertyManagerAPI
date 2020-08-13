const router = require("express").Router();

module.exports = db => {
  
  router.get("/tenants", (request, response) => {

    db.query(
      `
      SELECT *
      FROM tenants
    `,
    ).then(({ rows: results }) => {
      response.json(results);
    });
  });
  
  router.post("/tenant/create", (request, response)=>{

    const { name, phone, gender, notes, unitId  } = request.body

    db.query(
    `
    INSERT INTO tenants
    (name, phone, gender, notes, unitId)
      VALUES ($1, $2, $3, $4, $5)
    `,
    [name, phone, gender, notes, unitId]
    ).then((res) => {
      response.json(res.rows.results);
    });

  })

  router.patch("/tenant/edit/:tenantid", (request, response)=>{

    const tenantid = request.params.tenantid

    const { name, phone, gender, notes  } = request.body
    console.log(request.body, "editing tentant")

    db.query(
    `
      UPDATE tenants
      SET
      name = $1,
      phone = $2,
      gender = $3,
      notes = $4
      
      WHERE tenant_id = $5
 
    `,
    [name, phone, gender, notes, tenantid]
    ).then((res) => {
      response.json(res.rows.results);
    });

  })


  router.get("/tenants/:unitId", (request, response) => {
    unitId = request.params.unitId;

    db.query(
      `
      SELECT *
      FROM tenants
      WHERE unitID = $1
    `,
      [unitId]
    ).then(({ rows: results }) => {
      response.json(results);
    });
  });


  router.get("/tenant/:tenantId", (request, response) => {
    console.log('getting 1 tenant')

    const tenantId = request.params.tenantId;
    db.query(
      `
      SELECT *
      FROM tenants
      WHERE tenant_id = $1
    `,
      [tenantId]
    ).then(({ rows: results }) => {
      // console.log(user);
      response.json(results);
    });
  });

  router.delete("/tenant/:tenantId", (request, response) => {
    console.log('delting tenant')

    const tenantId = request.params.tenantId;
    db.query(
      `
      DELETE
      FROM tenants
      WHERE tenant_id = $1
    `,
      [tenantId]
    ).then(({ rows: results }) => {
      // console.log(user);
      response.json(results);
    });
  });
  

  return router;
};
