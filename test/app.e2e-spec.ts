import {Test} from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
describe('App e2e', () => { 
  let testNestApp:INestApplication;
  beforeAll(async ()=> {
    const moduleRef = await Test.createTestingModule({
      imports:[AppModule],

    }).compile();
     testNestApp=moduleRef.createNestApplication();
    testNestApp.useGlobalPipes(new ValidationPipe({
      whitelist:true
    }));
    await testNestApp.init();
  })
  afterAll(()=>{
    testNestApp.close();
  })
  it.todo('Should Pass');
  
 })