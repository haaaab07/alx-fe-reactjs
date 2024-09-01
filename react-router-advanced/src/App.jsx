import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile/*" element={<ProtectedRoute element={<Profile />} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}
