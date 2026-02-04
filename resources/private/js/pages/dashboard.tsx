import AppLayout from '@@/layouts/app-layout';
import { AppContent } from '@@/components/app-content';
import PerfectScrol from 'react-perfect-scrollbar';
import './dashboard.scss';

export default function Dashboard() {
    return (
        <AppLayout title="Dashboard">
            <AppContent>
                <div className="panel">
                    <div className="panel-body">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="..." className="card-img-top" alt="..." />
                            <PerfectScrol className="card-body" draggable>
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the card’s content.
                                </p>
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the card’s content.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </PerfectScrol>
                        </div>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="..." className="card-img-top" alt="..." />
                            <PerfectScrol className="card-body" draggable>
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the card’s content.
                                </p>
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the card’s content.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </PerfectScrol>
                        </div>
                    </div>
                </div>
            </AppContent>
            <div className="theme-panel">Panel</div>
        </AppLayout>
    );
}
