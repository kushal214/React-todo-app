function About() {
  return (
    <div className="container mt-2">

      <h2 className="fw-bold text-center mb-4">
        About This Project
      </h2>

      <div className="card shadow-sm border-0 rounded-4">
        <div className="card-body p-4">

          <p className="fs-5">
            This <strong>Todo App</strong> is a simple and user-friendly task
            management application designed to help you organize your daily
            tasks. You can easily add, edit, delete, and mark tasks as
            completed. Your todos are automatically saved in your browser, so
            they remain available even after refreshing the page.
          </p>

          <hr />

          <h4 className="fw-bold text-start mt-4 mb-3">
            ✨ Features
          </h4>

<ul className="list-unstyled fs-5 mt-3">
  <li className="mb-2">
    <i className="bi bi-plus-circle-fill text-success me-3"></i>
    Add new tasks
  </li>

  <li className="mb-2">
    <i className="bi bi-pencil-square text-primary me-3"></i>
    Edit existing tasks
  </li>

  <li className="mb-2">
    <i className="bi bi-trash-fill text-danger me-3"></i>
    Delete tasks
  </li>

  <li className="mb-2">
    <i className="bi bi-check-square-fill text-success me-3"></i>
    Mark tasks as completed
  </li>

  <li className="mb-2">
    <i className="bi bi-save-fill text-warning me-3"></i>
    Automatically saves your tasks
  </li>

  <li className="mb-2">
    <i className="bi bi-house-fill text-info me-3"></i>
    Easy navigation between Home and About pages
  </li>

  <li className="mb-2">
    <i className="bi bi-phone-fill text-secondary me-3"></i>
    Clean and mobile-friendly interface
  </li>
</ul>
        </div>
      </div>

    </div>
  );
}

export default About;