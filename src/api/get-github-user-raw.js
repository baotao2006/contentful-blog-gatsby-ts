import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
    auth: process.env.OCTOKIT_PERSONAL_ACCESS_TOKEN
});

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    try {
        const { data } = await octokit.request(`GET /users/{username}`, {
            username: 'PaulieScanlon'
        });

        res.status(200).json({ message: 'A ok!', user: data });
    } catch (error) {
        res.status(500).json({ message: 'Error!' });
    }
}
