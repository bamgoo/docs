<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const supported = new Set(['zh', 'en'])

  const detectLang = () => {
    const navLangs = Array.isArray(navigator.languages) ? navigator.languages : []
    const first = (navLangs[0] || navigator.language || '').toLowerCase()
    if (first.startsWith('zh')) return 'zh'
    if (first.startsWith('en')) return 'en'
    return 'en'
  }

  const target = detectLang()
  const to = `/${supported.has(target) ? target : 'en'}/`

  if (window.location.pathname !== to) {
    window.location.replace(to)
  }
})
</script>

# Redirecting...

- [中文首页](/zh/)
- [English Home](/en/)
