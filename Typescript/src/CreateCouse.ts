interface Curse{
  name: string, 
  duration: number, 
  educator: string
}

 class CreateCouse{
  execute({name, duration, educator}:Curse){console.log(name, duration, educator)}
  
}

export default new CreateCouse()