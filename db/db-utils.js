export class DbSeeder {
  constructor (entitiesLength, entitySchema) {
    this.entitiesLength = entitiesLength
    this.entitySchema = entitySchema
  }

  generateEntities () {
    let entities = []

    for(let i=1; i < this.entitiesLength; i++) {
      let entity = {}

      Object.keys(this.entitySchema).forEach((entityProp) => {
        const entityValue = this.entitySchema[entityProp]

        const parsedEntity = _parseEntityProp(entityProp)
        const parsedEntityProp = parsedEntity.prop
        const seedFuncs = parsedEntity.functions

        if(seedFuncs.length) {
          parsedEntity.functions.forEach((seedFunc) => {
            entity[parsedEntityProp] = _getSeedFuncResult(seedFunc, entityValue, this.entitiesLength, i)
          })
        } else {
          entity[parsedEntityProp] = entityValue
        }
      })

      entities.push(entity)
    }
    return entities
  }
} 

function _getRandFromArray(array) {
  return array[_getRandInt(0, array.length-1)] 
}

function _getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function _getSeedFuncResult(func, entityValue, entitiesLength, i) {
  let functionsList = [];

  functionsList['rand'] = (entityValue) => {
    return _getRandFromArray(entityValue)
  }

  functionsList['every'] = (entityValue, i) => {
    return entityValue[i % entityValue.length]
  }

  functionsList['id'] = (entitiesLength) => {
    return _getRandInt(1, entitiesLength - 1)
  }

  functionsList['incr'] = (entityValue) => {
    return i + entityValue
  }

  switch(func) {
    case 'rand':
      return functionsList[func](entityValue)
    case 'every':
      return functionsList[func](entityValue, i)
    case 'id':
      return functionsList[func](entitiesLength)
    case 'incr':
      return functionsList[func](entityValue)
  }
}

function _parseEntityProp(entityProp, entityValue) {
  const entityFunctions = entityProp.split(':')

  return {
    'prop' : entityFunctions.shift(),
    'functions' : entityFunctions,
  }
}


