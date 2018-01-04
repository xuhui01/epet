import Mock from 'mockjs'
import categoryLeftData from './categoryLeftData.json'
import rightData_88888 from './rightData-88888.json'
import brandData from './brandData.json'

Mock.mock('/api/categoryLeftData', {
  code: 0,
  data: categoryLeftData
});
Mock.mock('/api/rightData?owner=88888', {
  code: 0,
  data: rightData_88888
});
// 品牌
Mock.mock('/api/category/brand/list', {
  code: 0,
  brand: brandData.brand
});
