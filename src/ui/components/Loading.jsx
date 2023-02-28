
export const Loading = () => {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
            <div className="spinner-border text-primary" role="status" style={{ fontSize: '10rem' }}>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
