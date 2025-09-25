let stars = "";
console.log(stars);

for(i=0; i<5; i++){
  for(t=0; t<5-(i+1); t++){
    process.stdout.write(" ");
  }
    for(j=0; j<= 2* i ; j++){
    process.stdout.write("*");
  }

 process.stdout.write("\n"); 

} 


