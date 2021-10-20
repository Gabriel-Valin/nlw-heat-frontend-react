import styles from './styles.module.scss'
import { VscGithubInverted } from 'react-icons/vsc'
import { useEffect } from 'react'
import { api } from '../../services/api'

type AuthResponse = {
    token: string
    user: {
        id: string
        avatar_url: string
        name: string
        login: string
    }
}

export function LoginBox () {
    const signUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=8fc2e88a6bbbd0bbe7d7`

    async function signIn (githubCode: string) {
        const response = await api.post<AuthResponse>('auth', {
            code: githubCode
        })

        const { token, user } = response.data
        localStorage.setItem('@dowhile:token', token)
        console.log(user)
    }

    useEffect(() => {
        const url = window.location.href
        const hasGithubCode = url.includes('?code=')

        if (hasGithubCode) {
            const [urlWithoutCode, githubCode] = url.split('?code=')
            window.history.pushState({}, '', urlWithoutCode)
            signIn(githubCode)
        }


    }, [])

    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href={signUrl} className={styles.signInGithub}>
                <VscGithubInverted size='24' />
                Entrar com Github
            </a>
        </div>
    )
}