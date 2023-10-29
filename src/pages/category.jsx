import { Helmet } from 'react-helmet-async';

import CategoryView from 'src/sections/user/view/CategoryView';

// ----------------------------------------------------------------------

export default function CategoryPage() {
  return (
    <>
      <Helmet>
        <title> Category | Minimal UI </title>
      </Helmet>

      <CategoryView />
    </>
  );
}
