import { Helmet } from 'react-helmet-async';
import EditCategoryView from 'src/sections/category/EditCategoryView';

import CategoryView from 'src/sections/user/view/CategoryView';

// ----------------------------------------------------------------------

export default function EditCategoryPage() {
  return (
    <>
      <Helmet>
        <title> Edit Category | Minimal UI </title>
      </Helmet>

      <EditCategoryView />
    </>
  );
}
