# Spring Batch
`JobLauncher` Interface &rarr; .run() &rarr; `Job` &rarr; `Step`(Combination of `ItemReader` *Source*, `ItemProcessor`, `ItemWriter` *Destination*) 

Job can have multiple steps and and steps can have multiple ItemReader, Processor and Writer.

------------ &darr; ------------

`JobRepository` (Helps to maitain state of job wherther succeeded or failed)

## @EnableBatchProcessing
* Default configuration will be JobRepository, JobRegistory and JobLauncher

## @StepScope