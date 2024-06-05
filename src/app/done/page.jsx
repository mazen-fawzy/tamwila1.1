import Headr from '../../../componants/Headr';
import './done.css'

const page = () => {
  return (
    <div>
      <Headr/>
      <div className="login">
        <iframe
          src="https://form.jotform.com/241214419594053"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
        </iframe>
      </div>
    </div>
  );
}

export default page