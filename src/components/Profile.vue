<template>
    <div>
        <md-card md-with-hover>
            <md-card-header>
                <md-avatar>
                    <img src="{{ gravatar }}" alt="People">
                </md-avatar>

                <div class="md-title">{{ name }}</div>
                <div class="md-subhead">Subtitle here</div>
            </md-card-header>

            <md-card-content>
                Lorem ipsum dolor sit amet, consecteturdipisicing elit. Optio itaque ea nostrum.
            </md-card-content>
        </md-card>
    </div>
</template>
<style>

</style>
<script>
export default {
    data () {
        return {
            avatar: 'https://s.gravatar.com/avatar/52fb84f3e6d38e577b9bef8c412b01a7?s=80',
            name: 'Roger Melich'
        }
    },
    create () {
        console.log('Component Profile created')
           this.fetchDate()
}
</script>
