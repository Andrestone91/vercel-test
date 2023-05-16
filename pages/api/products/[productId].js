export default function handler(req, res) {
    res.status(200).json({
        body: "",
        query: req.query,
        cookies: req.cookies,
        test: true,
    });
}