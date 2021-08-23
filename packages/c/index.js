const a=requrie("@theowenyoung/package-example-a")
const b=require("@theowenyoung/package-example-b")

module.exports=()=>{
  return a()+b()
}