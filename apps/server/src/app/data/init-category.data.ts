import { createCategory, getCategories } from '../services/category.service';

const defalutCategories = [
  { value: 'angular', displayText: 'Angular' },
  { value: 'javascript', displayText: 'JavaScript' },
  { value: 'nodejs', displayText: 'NodeJS' },
  { value: 'reactjs', displayText: 'ReactJS' },
  { value: 'typescript', displayText: 'TypeScript' },
  { value: 'aws', displayText: 'AWS' },
  { value: 'gcp', displayText: 'GCP' },
  { value: 'spring-boot', displayText: 'Spring-boot' },
  { value: 'java', displayText: 'Java' },
  { value: 'algorithm', displayText: 'Algorithm' },
  { value: 'others', displayText: 'Others' }
];

(async function initCategory() {
  let categories = await getCategories({}, null, null);
  if (!categories || categories.length === 0) {
    console.log('Initializing Category data...');
    categories = await createCategory(defalutCategories);
  }
  return categories;
})();
